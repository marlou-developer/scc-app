import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import Button from "../../../_components/button.jsx";
import Input from "../../../_components/input.jsx";
import GoogleIcon from "../../../_svg/google-icon.jsx";

export default function FormSection() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const validateEmail = () => {
    // simple email regex
    return /^\S+@\S+\.\S+$/.test(form.email);
  };

  const handleSubmit = async () => {
     router.push("/portal");
    // Basic client-side validation
    // if (!form.email.length || !form.password.length) {
    //   Alert.alert("Validation", "Please enter both email and password.");
    //   return;
    // }
    // if (!validateEmail(form.email)) {
    //   Alert.alert("Validation", "Please enter a valid email address.");
    //   return;
    // }

    // // Fake login flow to demo loading state
    // setLoading(true);
    // try {
    //   await new Promise((res) => setTimeout(res, 1200));
    //   // Replace this with your real auth call (fetch / axios / firebase / etc.)
    //   // Alert.alert("Success", `Logged in as ${email}`);
    //   router.push("/portal");
    // } catch (err) {
    //   Alert.alert("Error", "Something went wrong. Try again.");
    // } finally {
    //   setLoading(false);
    // }
  };
  return (
    <View>
      <View className="space-y-4">
        <Input
          value={form.email}
          onChange={(value) => setForm({ ...form, email: value })}
          placeholder="you@example.com"
          label="Email"
          type="email"
        />

        <Input
          value={form.password}
          onChange={(value) => setForm({ ...form, password: value })}
          placeholder="Your password"
          label="Password"
          type="password"
        />

        <Pressable
          onPress={() =>
            Alert.alert("Forgot password", "Implement password reset flow.")
          }
        >
          <Text className="text-sm text-right text-blue-600">
            Forgot password?
          </Text>
        </Pressable>

        <Button loading={loading} value="Sign In" onSubmit={handleSubmit} />

        <View className="flex-row items-center justify-center mt-4">
          <View className="h-px bg-slate-200 flex-1" />
          <Text className="px-3 text-slate-400">or</Text>
          <View className="h-px bg-slate-200 flex-1" />
        </View>

        <View className="mt-4 space-y-2 flex flex-col gap-3">
          <Pressable
            onPress={() => Alert.alert("Social", "Implement Google login")}
            className="border flex gap-3 border-slate-200 rounded-lg px-4 py-3 flex-row items-center justify-center space-x-3"
          >
            <GoogleIcon />
            <Text className="text-slate-700 font-medium">
              Continue with Google
            </Text>
          </Pressable>
        </View>
      </View>
      <View className="mt-8 flex-row justify-center">
        <Text className="text-slate-600">Don't have an account? </Text>
        <Pressable
          onPress={() => Alert.alert("Sign up", "Navigate to sign up screen")}
        >
          <Text className="text-blue-600 font-semibold">Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}
