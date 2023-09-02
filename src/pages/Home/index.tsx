import { View, Text, ImageBackground } from "react-native"
import { useFeatureFlag } from "configcat-react"

import { styles } from "./styles"

export function Home() {
  const { loading, value: eventFeatureBanner } = useFeatureFlag(
    "event_feature_banner",
    false
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {loading ? "Carregando..." : "Feature Flag"}
      </Text>

      {eventFeatureBanner && (
        <ImageBackground
          source={{ uri: "https://source.unsplash.com/random/800x600" }}
          style={styles.banner}
        />
      )}
    </View>
  )
}
