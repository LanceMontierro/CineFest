import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import {Link, Redirect} from "expo-router";
import { Text, View } from "react-native";
import { SignOutButton } from "@/components/SignOutButton";
import React from "react";

export default function Page() {
    const { user } = useUser();

    return (
        <View className="flex-1 bg-[#DADADA]">

            <View className="mt-20 ml-16">
                <SignedIn>
                    <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
                    <SignOutButton />
                </SignedIn>

                <SignedOut>
                    <Link href="/auth/sign-in">
                        <Text>Sign in</Text>
                    </Link>
                    <Link href="/auth/sign-up">
                        <Text>Sign up</Text>
                    </Link>
                </SignedOut>
            </View>
        </View>
    );
}