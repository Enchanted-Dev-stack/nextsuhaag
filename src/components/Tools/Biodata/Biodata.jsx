import React from "react";
import {
  Text,
  View,
  Document,
  Page,
  Image,
  Font,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

import bg from "@/Assets/Images/"
import monstserrateAlternateRegular from "../../../Assets/Fonts/MontserratAlternate/MontserratAlternates-Regular.ttf";
import monstserrateAlternateBold from "../../../Assets/Fonts/MontserratAlternate/MontserratAlternates-Bold.ttf";
import OutfitRegular from "../../../Assets/Fonts/Outfit/Outfit-Regular.ttf";

Font.register({
  family: "MontserratAlternateRegular",
  src: monstserrateAlternateRegular,
});
Font.register({
  family: "MontserratAlternateBold",
  src: monstserrateAlternateBold,
});
Font.register({ family: "OutfitReg", src: OutfitRegular });

const styles = StyleSheet.create({
  page: {
    position: "relative",
    backgroundColor: "#fff",
    paddingTop: 120,
    paddingHorizontal: 60,
    fontFamily: "MontserratAlternateRegular",
  },
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
  },
  namecontainer: {
    fontFamily: "MontserratAlternateBold",
    fontSize: 24,
    color: "red",
    marginVertical: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  Familylabel: {
    fontSize: 20,
    color: "red",
    marginTop: 10
  },
  details: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    fontSize: 12,
  },
  basicinfo: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  family: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  contactlabel: {
    fontSize: 20,
    color: "red",
    marginTop: 10
  },
  label: {
    width: 160,
  },
  container: {
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: "translateX(-50%)",
  },
  btn: {
    backgroundColor: "blue",
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    width: "250",
    textAlign: "center",
    textDecoration: "none",
    fontSize: 12,
  },
});

function Biodata(props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Image
          style={styles.bg}
          src={props.template}
        ></Image>
        <View style={styles.namecontainer}>
          <Text style={styles.name}>{props.name}</Text>
        </View>
        <View style={styles.details}>
          <View style={styles.basicinfo}>
            <View style={styles.row}>
              <Text style={styles.label}>Date of Birth</Text>
              <Text>:</Text>
              <Text>{props.dob}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Time of Birth</Text>
              <Text>:</Text>
              <Text>{props.tob}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Place of Birth</Text>
              <Text>:</Text>
              <Text>{props.pob}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Rashi</Text>
              <Text>:</Text>
              <Text>{props.rashi}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Nakshatra</Text>
              <Text>:</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Height</Text>
              <Text>:</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Religion</Text>
              <Text>:</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Caste</Text>
              <Text>:</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Subcaste</Text>
              <Text>:</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Gotra</Text>
              <Text>:</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Manglik</Text>
              <Text>:</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Education</Text>
              <Text>:</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>College Name</Text>
              <Text>:</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Employed in</Text>
              <Text>:</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Organization Name</Text>
              <Text>:</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Annual Income</Text>
              <Text>:</Text>
            </View>
          </View>
          <View style={styles.family}>
            <Text style={styles.Familylabel}>Family Details</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Father's Name</Text>
              <Text>:</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Father's Occupation</Text>
              <Text>:</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Mother's Name</Text>
              <Text>:</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Mother's Occupation</Text>
              <Text>:</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Total Brothers</Text>
              <Text>:</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Total Sisters</Text>
              <Text>:</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Married Brothers</Text>
              <Text>:</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Married Sisters</Text>
              <Text>:</Text>
            </View>
          </View>
          <View style={styles.contact}>
            <Text style={styles.contactlabel}>Contact Details</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Contact Number</Text>
              <Text>:</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Address</Text>
              <Text>:</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <Link href="https://google.com" style={styles.btn}>
            <Text>Generate Your Own Biodata</Text>
          </Link>
        </View>
      </Page>
    </Document>
  );
}

export default Biodata;
