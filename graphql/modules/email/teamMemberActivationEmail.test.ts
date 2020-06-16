import sendTeamMemberActivationEmail, {
  teamMemberActivationEmail,
} from "./teamMemberActivationEmail";

test("personalised team member activation email message", () => {
  const result = teamMemberActivationEmail("test@example.com", "Hans");

  expect(result.to).toBe("test@example.com");
  expect(result.text).toContain("Hans");
});

test("sending no activation emails", () => {
  return sendTeamMemberActivationEmail("Hans", "Muster", "").then((data) => {
    expect(data).toBe(0);
  });
});
