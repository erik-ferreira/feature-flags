import { ConfigCatProvider, PollingMode } from "configcat-react"

import { Home } from "./src/pages/Home"
import { StatusBar } from "react-native"

export default function App() {
  return (
    <ConfigCatProvider
      sdkKey="NKvbCJ1GyEGMtKdj9WFhqQ/KUVdxbZuAk-YD-5NfANldw"
      pollingMode={PollingMode.AutoPoll}
      options={{ pollIntervalSeconds: 10 }}
    >
      <StatusBar barStyle="light-content" />
      <Home />
    </ConfigCatProvider>
  )
}
