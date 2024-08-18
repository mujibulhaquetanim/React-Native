import { Href, Redirect } from "expo-router";

export default function Home() {
  return <Redirect href={"/(auth)/welcome" as Href} />
}