import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 6;

export default function Reset() {
  const img = require("../../../assets/images/logo.png");
  const googleImg = require("../../../assets/images/google.png");
  const facebookImg = require("../../../assets/images/facebook.png");
  const navigation = useNavigation();

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <Image source={img} style={{ alignSelf: "center" }} />
          <Text
            style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}
          >
            Enter Reset Code
          </Text>
          <Text style={{ textAlign: "center" }}>
            A Reset Code has been sent to your mail Please go to your mail to
            Confirm
          </Text>
        </View>
        <View>
          <View style={{paddingHorizontal:40}}>
          <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor/> : null)}
          </Text>
        )}
      />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Sign in now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  top: {
    marginBottom: 20,
    marginTop: 100,
  },
  button: {
    backgroundColor: "rgba(128, 29, 72, 1)",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 2,
  },
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 10, marginBottom:24 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 1,
    borderColor: "rgba(128, 29, 72, 1)",
    textAlign: "center",
    backgroundColor:'ghostwhite',
    borderRadius:5
  },
  focusCell: {
    borderColor: "#000",
  },
});
