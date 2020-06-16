import { parseEmailsFromString, capitalizedFullName } from "./stringUtils";

test("propsed team members are parsed to valid email addresses", () => {
  const notAnEmail = parseEmailsFromString("No");
  const capitalized = parseEmailsFromString("Erika.Mustermann@Example.ch");
  const emailsSeparatedByNewLine = parseEmailsFromString(
    "first@example.com\nsecond@example.com",
  );
  const withWhiteSpace = parseEmailsFromString(
    "first@example.com\nsecond@example.com maybe: \nthird@example.com\t\nfourth@example.com\n  fifth@example.com  \n\t\tsixth@example.com",
  );
  const longDescription = parseEmailsFromString(
    "I really want these people here please: \nfirst@example.com \nsecond@example.com\nthird@example.com\nfourth@example.com\nfifth@example.com\nsixth@example.com",
  );

  expect(notAnEmail).toBe(null);

  expect(capitalized).toHaveLength(1);
  expect(capitalized["0"]).toBe("erika.mustermann@example.ch"); // We want everything lowercase so it can be found programmatically

  expect(emailsSeparatedByNewLine).toHaveLength(2);
  expect(emailsSeparatedByNewLine[0]).toBe("first@example.com");
  expect(emailsSeparatedByNewLine[1]).toBe("second@example.com");

  expect(withWhiteSpace).toHaveLength(6);
  expect(withWhiteSpace[0]).toBe("first@example.com");
  expect(withWhiteSpace[1]).toBe("second@example.com");
  expect(withWhiteSpace[2]).toBe("third@example.com");
  expect(withWhiteSpace[3]).toBe("fourth@example.com");
  expect(withWhiteSpace[4]).toBe("fifth@example.com");
  expect(withWhiteSpace[5]).toBe("sixth@example.com");

  expect(longDescription).toHaveLength(6);
  expect(longDescription[0]).toBe("first@example.com");
  expect(longDescription[1]).toBe("second@example.com");
  expect(longDescription[2]).toBe("third@example.com");
  expect(longDescription[3]).toBe("fourth@example.com");
  expect(longDescription[4]).toBe("fifth@example.com");
  expect(longDescription[5]).toBe("sixth@example.com");
});

test("capitalized full name", () => {
  const result = capitalizedFullName("tiny", "tim");
  expect(result).toEqual("Tiny Tim");
});
