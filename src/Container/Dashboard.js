import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {AppLogo} from '../Components/UsableComponents';
import {windowHeight, windowWidth} from '../Components/Global_Constants';

const DATA= [
  {
    id: 1,
    name: 'Product 1',
    img: 'https://picsum.photos/id/237/200/300',
    quantity: 30,
    batchDate: '20-1-2023',
    status: 'pending',
    vendor: 'abc',
    mrp: 600,
  },
  {
    id: 2,
    name: 'Product 2',
    quantity: 30,
    batchDate: '20-4-2023',
    img: 'https://picsum.photos/id/225/200/300?random=1',
    status: 'pending',
    vendor: '123',
    mrp: 600,
  },
  {
    id: 3,
    name: 'Product 3',
    batchDate: '25-4-2023',
    quantity: 30,
    img: 'https://picsum.photos/id/223/200/300?random=1',
    status: 'approved',
    vendor: 'abc123',
    mrp: 600,
  },
  {
    id: 4,
    name: 'Product 4',
    batchDate: '30-4-2023',
    quantity: 30,
    img: 'https://picsum.photos/id/222/200/300?random=1',
    status: 'approved',
    vendor: 'abc 567',
    mrp: 600,
  },
  {
    id: 5,
    name: 'Product 5',
    quantity: 30,
    batchDate: '13-6-2023',
    img: 'https://picsum.photos/200/300?random=1',
    status: 'approved',
    vendor: 'pbc',
    mrp: 600,
  },
];

const DashBoard = props => {
  const [data,setData] =useState(DATA)
  const {name, option} = useSelector(state => state?.valueData?.user);

  const designation = option === 2 ? 'Store Manager' : 'Department Manager';

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <AppLogo />
      </View>
      <View style={styles.detail}>
        <Text style={styles.detailText}>
          {name} you are loggedin as a {designation}
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item,index}) => {
          return (
            <View style={styles.flatContainer}>
              <Text style={styles.flatText}>Product Id: {item?.id}</Text>
              <Text style={styles.flatText}>Product Name: {item?.name}</Text>
              <Text style={styles.flatText}>Vendor: {item?.vendor}</Text>
              <Text style={styles.flatText}>Mrp: {item?.mrp}</Text>
              <Text style={styles.flatText}>Batch date: {item?.batchDate}</Text>
              <Text style={styles.flatText}>Quantity: {item?.quantity}</Text>
              <View style={styles.rowContainer}>
                <Image source={{uri: item.img}} style={styles.img} />
                <View style={styles.box}>
                  <Text style={styles.status}>Status</Text>
                  <Text style={styles.itemStatus}>{item.status}</Text>
                  {item.status == 'pending' && option === 2 &&(
                    <TouchableOpacity style={styles.button} onPress={()=>{
                      const filtered=data.filter((item,indexArray)=>index!==indexArray)
                      filtered.push({...item,status:"approved"})
                      setData(filtered)
                    }}>
                      <Text style={styles.textApprove}>Approve</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  topContainer: {
    marginTop: 10,
    width: windowWidth * 0.95,
    elevation: 12,
    borderRadius: 6,
    height: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detail: {
    width: windowWidth,
    paddingHorizontal: windowWidth * 0.1,
    marginTop: windowHeight * 0.03,
    marginBottom: windowHeight * 0.05,
  },
  detailText: {color: 'black', fontSize: 12, fontWeight: 'bold'},
  flatContainer: {
    height: windowHeight * 0.3,
    width: windowWidth * 0.9,
    borderRadius: 8,
    backgroundColor: '#DEDEDE',
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  flatText: {color: 'black', fontSize: 12, fontWeight: 'bold'},
  rowContainer: {
    height: windowHeight * 0.22,
    width: windowWidth * 0.82,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    height: windowHeight * 0.15,
    width: windowWidth * 0.45,
    borderRadius: 9,
  },
  box: {
    height: windowHeight * 0.15,
    width: windowWidth * 0.35,
    borderRadius: 9,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemStatus: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: windowHeight * 0.04,
    width: windowWidth * 0.25,
    borderRadius: 6,
    marginTop: 5,
    marginBottom: windowHeight * 0.02,
    elevation: 12,
  },
  textApprove: {color: 'white', fontSize: 12},
});
