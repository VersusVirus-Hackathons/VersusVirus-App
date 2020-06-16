import { welcomeEmail } from "./welcomeEmail";

test("personalised welcome email message", () => {
  const result = welcomeEmail("test@example.com", "Hans");

  expect(result.to).toBe("test@example.com");
  expect(result.text).toContain("Hans");
});
