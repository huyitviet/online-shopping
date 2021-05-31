import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, TouchableOpacity, Alert } from "react-native";


const image1 = {
  uri: './assets/bag1.jpg',
  width: 64,
  height: 64
}


function Cart() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [sumMoney, setSumMoney] = useState(0)
  const money1 = 1000000
  const money2 = 1200000


  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={styles.top}>
        <Text style={{ marginTop: 30 }}> Giỏ hàng: {count1 + count2} sản phẩm</Text>
      </View>

      <View style={styles.middle1}>

        <View style={styles.middleDetail1}>
          <Text style={{ marginTop: 20 }}> Sản phẩm được thêm từ trang chi tiết </Text>
        </View>
        <ScrollView>


          <View style={styles.middleDetail2}>

            <View style={styles.Right1}>
              <TouchableOpacity onPress={() => { Alert.alert('huyitviet', 'Bạn chắc chắn muốn xoá') }}>
                <Image style={{ width: 30, height: 30, margin: 5, marginTop: 40 }} source={require('./assets/trash.png')}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.Mid1}>
              <Text stype={{ margin: 100, fontWeight: "bold" }}> Sản phẩm Packsize Lớn - Két </Text>
              <Text stype={{ margin: 100 }}> {money1} đ  </Text>

              <Button
                onPress={() => {
                  setCount1(count1 + 1);

                }}
                title={"+"}
              />
              <Button style={{ width: 30, height: 30, borderWidth: 1 }}
                onPress={() => {
                  setCount1(count1 - 1);
                  setSumMoney(count2 * money2 + count1 * money1)
                }}
                title={"-"}
              />
              {/* <TextInput
                style={{ height: 40 }}
                placeholder= ""
                onChangeText={count1 => setText1(count1)}
                defaultValue={text}
              /> */}
              <Text style={{marginVertical: 20}}> Số lượng: {count1} sản phẩm</Text>




            </View>
            <View style={styles.Left1}>
              <Image
                style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
                source={require('./assets/bag1.jpg')}
              />
            </View>
          </View>
          <View style={styles.middle2}>
            <View style={styles.Right2}>
              <TouchableOpacity onPress={() => { Alert.alert('huyitviet', 'Bạn chắc chắn muốn xoá') }}>
                <Image style={{ width: 30, height: 30, margin: 5, marginTop: 40 }} source={require('./assets/trash.png')}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.Mid2}>
              <Text stype={{ margin: 100, fontWeight: "bold" }}> Sản phẩm Packsize Lớn - Két </Text>
              <Text stype={{ margin: 100 }}> {money2} đ  </Text>

              <Button
                onPress={() => {
                  setCount2(count2 + 1);
                  setSumMoney(count2 * money2 + count1 * money1)
                }}
                title={"+"}
              />
              <Button style={{ width: 30, height: 30, borderWidth: 1 }}
                onPress={() => {
                  setCount2(count2 - 1);
                  setSumMoney(count2 * money2 + count1 * money1)
                }}
                title={"-"}
              />
              <Text style={{marginVertical: 20}}> Số lượng: {count2} sản phẩm</Text>



            </View>
            <View style={styles.Left2}>
              <Image
                style={{ width: 100, height: 100, resizeMode: 'contain', margin: 10 }}
                source={require('./assets/bag1.jpg')}
              />
            </View>
          </View>
        </ScrollView>

      </View>



      <View style={styles.bottom}>
        <View style={styles.bottomTop}>
          <View style={styles.bottomTopRight}>
            <Text style={{ margin: 30 }}> Tổng tiền sản phẩm </Text>
          </View>
          <View style={styles.bottomTopLeft}>
            <Text style={{ margin: 30 }}> {sumMoney} đ </Text>
          </View>
        </View>

        <View style={styles.bottomBot}>
          <Text style={{ margin: 30, justifyContent: 'center' }}> Mua hàng</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 20,
  },

  top: {
    flex: 1,
    backgroundColor: "#0099FF"

  },

  middle1: {
    flex: 5,
    backgroundColor: "darkorange",
    flexDirection: 'column',
  },
  middle2: {
    flex: 3,
    backgroundColor: "green",
    flexDirection: "row-reverse"
  },

  bottom: {
    flex: 2,
    backgroundColor: "white",
    flexDirection: "column",

  },

  middleDetail1: {
    flex: 3,
    backgroundColor: "#F6F6F6"
  },
  middleDetail2: {
    flexDirection: "row-reverse",
    borderWidth: 1,
    flex: 4,
    backgroundColor: "#F6F6F6"
  },

  Right1: {
    flex: 1,
    backgroundColor: "blue",
    borderWidth: 1
  },
  Left1: {
    borderWidth: 1,
    flex: 3,
    backgroundColor: "#0099FF"
  },
  Mid1: {
    borderWidth: 1,
    flex: 6,
    backgroundColor: "#0099FF"
  },

  Right2: {
    flex: 1,
    backgroundColor: "blue",
    borderWidth: 1
  },
  Left2: {
    borderWidth: 1,
    flex: 3,
    backgroundColor: "#0099FF"
  },
  Mid2: {
    borderWidth: 1,
    flex: 6,
    backgroundColor: "#0099FF"
  },

  bottomTop: {
    borderWidth: 1,
    flex: 1,
    backgroundColor: "#0099FF",
    flexDirection: 'row',

  },
  bottomBot: {
    borderWidth: 1,
    flex: 1,
    backgroundColor: "orange"
  },
  bottomTopLeft: {
    borderWidth: 1,
    flex: 1,
    backgroundColor: "#0099FF"
  },
  bottomTopRight: {
    borderWidth: 1,
    flex: 1,
    backgroundColor: "orange"
  },

  gioHang: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    padding: 5,
    textAlign: 'left'

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#00FF00',
    marginBottom: 5,
  },
});

export default Cart;