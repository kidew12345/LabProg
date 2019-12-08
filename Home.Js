import React from 'react'
import { TouchableOpacity, Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
const Home = () => {
const goToAbout = () => {
Actions.about()
}
const goToimage = () => {
Actions.image()
}
const goTotesstate = () => {
Actions.tesstate()
}
const goTotesprops = () => {
Actions.tesprops()
}
const goTotesview = () => {
Actions.tesview()
}
const goTotesimage = () => {
Actions.tesimage()
}
const goToAppContainer = () => {
Actions.AppContainer()
}
const goTotesscrollview = () => {
Actions.tesscrollview()
}
const goTotesstyle = () => {
Actions.tesstyle()
}
const goTotesfixed = () => {
Actions.tesfixed()
}
const goTotesflexdim = () => {
Actions.tesflexdim()
}

return (

     <ScrollView>
	 <View>
   <Text>CHAPTER3</Text>
</View>
<View>
   <TouchableOpacity style = {{ margin: 2 }} onPress = {goToAbout}>
<Text>Hello World</Text>
</TouchableOpacity>
</View>
<View>
<TouchableOpacity style = {{ margin: 2 }} onPress = {goToimage}>
<Text>Hello style</Text>
</TouchableOpacity>
</View>
<View>
<TouchableOpacity style = {{ margin: 2 }} onPress = {goTotesstate}>
<Text>State</Text>
</TouchableOpacity>
</View>
<View>
<TouchableOpacity style = {{ margin: 2 }} onPress = {goTotesprops}>
<Text>Props</Text>
</TouchableOpacity>
</View>
 <View>
   <Text>CHAPTER4(Core Component)</Text>
</View>
<View>
<TouchableOpacity style = {{ margin: 2 }} onPress = {goTotesview}>
<Text>View</Text>
</TouchableOpacity>
</View>
<View>
<TouchableOpacity style = {{ margin: 2 }} onPress = {goTotesimage}>
<Text>Img</Text>
</TouchableOpacity>
</View>
<View>
<TouchableOpacity style = {{ margin: 2 }} onPress = {goToAppContainer}>
<Text>Notification</Text>
</TouchableOpacity>
</View>
<View>
<TouchableOpacity style = {{ margin: 2 }} onPress = {goTotesscrollview}>
<Text>ScrollView</Text>
</TouchableOpacity>
</View>
<View>
<TouchableOpacity style = {{ margin: 2 }} onPress = {goTotesstyle}>
<Text>Style</Text>
</TouchableOpacity>
</View>
<View>
<TouchableOpacity style = {{ margin: 2 }} onPress = {goTotesfixed}>
<Text>Fixed Flex</Text>
</TouchableOpacity>
</View>
<View>
<TouchableOpacity style = {{ margin: 2 }} onPress = {goTotesflexdim}>
<Text>Flex Dimension</Text>
</TouchableOpacity>
</View>
<View>
<TouchableOpacity style = {{ margin: 2 }} onPress = {goTotesflexdim}>
<Text>Flex Dimension</Text>
</TouchableOpacity>
</View>
</ScrollView>



);
}
export default Home
