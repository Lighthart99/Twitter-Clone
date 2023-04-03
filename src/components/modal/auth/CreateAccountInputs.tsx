import { FIREBASE_ERRORS } from "@/firebase/error";
import { auth } from "@/firebase/firebase";
import { Stack, Input, Flex, Select, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";

type CreateAccountInputProps = {};

const CreateAccountInput = ({}: CreateAccountInputProps) => {
  // const [month, setMonth] = useState("");
  // const [day, setDay] = useState("");
  // const [year, setYear] = useState("");

  // const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedMonth = event.target.value;
  //   setMonth(selectedMonth);

  //   // Hide the 31st day option if the selected month has only 30 days
  //   if (["April", "June", "September", "November"].includes(selectedMonth)) {
  //     setDay("30");
  //   }
  // };

  // const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedDay = event.target.value;
  //   setDay(selectedDay);
  // };

  // const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedYear = event.target.value;
  //   setYear(selectedYear);
  // };

  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, userCred, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) setError("");
    if (signUpForm.password !== signUpForm.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

  // try catch later for amazing toast

  //   toast.success("succesfully account created");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // udpate form state
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={4}>
        <Stack spacing={3}>
          <Input
            required
            name="email"
            placeholder="email"
            type="email"
            onChange={onChange}
          />
          <Input
            required
            name="password"
            placeholder="password"
            type="password"
            onChange={onChange}
          />
          <Input
            required
            name="confirmPassword"
            placeholder="confirm password"
            type="password"
            onChange={onChange}
          />
        </Stack>
        {/* <Flex direction="column" textAlign="left">
            <Text fontSize="16pt" fontWeight={700}>
              Date of birth
            </Text>
            <Text fontSize="10pt" color="gray.600">
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </Text>
            <Stack direction="row" spacing={4} mt={4}>
              <Select
                placeholder="Month"
                onChange={handleMonthChange}
                value={month}
              >
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </Select>
              <Select
                placeholder="Day"
                onChange={handleDayChange}
                value={day}
                disabled={!month} // Disable the day select until a month is selected
              >
                {Array.from({ length: 31 }, (_, index) => index + 1).map(
                  (num) =>
                    // Don't show the 31st day if the selected month has only 30 days
                    num === 31 &&
                    ["April", "June", "September", "November"].includes(
                      month
                    ) ? null : (
                      <option key={num} value={String(num)}>
                        {num}
                      </option>
                    )
                )}
              </Select>
              <Select
                placeholder="Year"
                onChange={handleYearChange}
                value={year}
                disabled={!day}
              >
                <option value="1940">1940</option>
                <option value="1941">1941</option>
                <option value="1942">1942</option>
                <option value="1943">1943</option>
                <option value="1944">1944</option>
                <option value="1945">1945</option>
                <option value="1946">1946</option>
                <option value="1947">1947</option>
                <option value="1948">1948</option>
                <option value="1949">1949</option>
                <option value="1950">1950</option>
                <option value="1951">1951</option>
                <option value="1952">1952</option>
                <option value="1953">1953</option>
                <option value="1954">1954</option>
                <option value="1955">1955</option>
                <option value="1956">1956</option>
                <option value="1957">1957</option>
                <option value="1958">1958</option>
                <option value="1959">1959</option>
                <option value="1960">1960</option>
                <option value="1961">1961</option>
                <option value="1962">1962</option>
                <option value="1963">1963</option>
                <option value="1964">1964</option>
                <option value="1965">1965</option>
                <option value="1966">1966</option>
                <option value="1967">1967</option>
                <option value="1968">1968</option>
                <option value="1969">1969</option>
                <option value="1970">1970</option>
                <option value="1971">1971</option>
                <option value="1972">1972</option>
                <option value="1973">1973</option>
                <option value="1974">1974</option>
                <option value="1975">1975</option>
                <option value="1976">1976</option>
                <option value="1977">1977</option>
                <option value="1978">1978</option>
                <option value="1979">1979</option>
                <option value="1980">1980</option>
                <option value="1981">1981</option>
                <option value="1982">1982</option>
                <option value="1983">1983</option>
                <option value="1984">1984</option>
                <option value="1985">1985</option>
                <option value="1986">1986</option>
                <option value="1987">1987</option>
                <option value="1988">1988</option>
                <option value="1989">1989</option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </Select>
            </Stack>
          </Flex> */}
        <Button
          type="submit"
          backgroundColor="black"
          color="white"
          borderRadius="full"
          _hover={{ backgroundColor: "500" }}
          isLoading={loading}
        >
          Create Account
        </Button>

        {userError?.message && (
          <Text color="red">
            {error ||
              FIREBASE_ERRORS[
                userError?.message as keyof typeof FIREBASE_ERRORS
              ]}
          </Text>
        )}
      </Stack>
    </form>
  );
};

export default CreateAccountInput;
