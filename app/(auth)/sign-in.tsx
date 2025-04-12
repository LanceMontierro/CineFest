import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import {images} from "@/constansts/images";

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Handle the submission of the sign-in form
  const onSignInPress = async () => {
    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View className="flex-1 bg-[#DADADA]">
        <View className="mt-64">
        <View className="bg-[#C6C6C6] p-20">
      <Text>Email</Text>

      <TextInput
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Enter email"
        onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        className=""
      />
        <Text className="mb-2">Password</Text>
      <TextInput
        value={password}
        placeholder="Enter password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />

      <View style={{ display: "flex", flexDirection: "row", gap: 3 , marginTop: 20,}}>
        <Text>Don't have an account?</Text>
        <Link href="/auth/sign-in">
          <Text>Sign up</Text>
        </Link>
      </View>
        </View>
        </View>
        <TouchableOpacity onPress={onSignInPress} className="mt-36">
            <Text>Continue</Text>
        </TouchableOpacity>

    </View>
  );
}
