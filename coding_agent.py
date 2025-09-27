import os
import subprocess
import google.generativeai as genai
import argparse

# -----------------------------
# Config
# -----------------------------
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel("gemini-2.5-pro")

# -----------------------------
# Helpers
# -----------------------------
def call_llm(prompt: str) -> str:
    """Send prompt to Gemini and return text."""
    response = model.generate_content(prompt)
    return response.text

def write_file(filename: str, content: str):
    with open(filename, "w") as f:
        f.write(content)

def run_tests(component_name: str) -> tuple[int, str]:
    """Run pytest and return (exit_code, output)."""
    try:
        result = subprocess.run(
            ["pytest", "-q", f"test_{component_name}.py"],
            capture_output=True,
            text=True
        )
        return result.returncode, result.stdout + result.stderr
    except Exception as e:
        return 1, str(e)

# -----------------------------
# Workflow
# -----------------------------
def main():
    parser = argparse.ArgumentParser(description="A coding agent that generates and tests Python components.")
    parser.add_argument("component_name", help="The name of the component to be generated (e.g., 'login_api').")
    parser.add_argument("--initial_context", default="""
You are an expert software engineer.
""", help="The initial context or requirements for the component.")
    args = parser.parse_args()

    component_name = args.component_name
    component_context = args.initial_context
    
    test_file_name = f"test_{component_name}.py"
    impl_file_name = f"{component_name}.py"

    # 1. Generate test file
    test_prompt = f"""{component_context}

Write pytest tests for this component. 
Only return valid Python code. Use file name: {test_file_name}
"""
    tests = call_llm(test_prompt)
    write_file(test_file_name, tests)

    # 2. Generate initial implementation
    impl_prompt = f"""{component_context}

Here are the tests:
{tests}

Implement the component in Python in a file called {impl_file_name} 
so that all tests pass.
"""
    impl = call_llm(impl_prompt)
    write_file(impl_file_name, impl)

    # 3. Loop: run tests → debug → reimplement
    max_loops = 10
    for attempt in range(1, max_loops + 1):
        code, output = run_tests(component_name)
        print(f"--- Attempt {attempt} ---")
        print(output)

        if code == 0:
            print("✅ All tests passed!")
            break

        debug_prompt = f"""{component_context}

The following implementation failed tests:
{impl}

Test results:
{output}

Fix the {impl_file_name} so tests pass. Return only Python code.
"""
        impl = call_llm(debug_prompt)
        write_file(impl_file_name, impl)
    else:
        print(f"❌ Tests still failing after {max_loops} attempts.")

if __name__ == "__main__":
    main()