<template>
  <div class="home">
      <!-- table -->
      <el-table height="750px" :data="tableData.filter(data => !search || data.firstname.toLowerCase().includes(search.toLowerCase()))" 
        border  style="width:80%;position:relative;left:10%;overflow:none">

        <el-table-column prop="firstname" sortable label="FirstName">
        </el-table-column>
        <el-table-column prop="lastname" label="LastName"></el-table-column>
        <el-table-column prop="city" label="City"></el-table-column>
        <el-table-column prop="phone_no" label="Phone Number"></el-table-column>
        <el-table-column prop="email" label="Email"></el-table-column>
        <el-table-column prop="companyName" label="CompanyName"></el-table-column>

        <el-table-column prop="userImage" label="Image">
        <template slot-scope="scope">
          <div>
            <img id="imageShow" :src="scope.row.userImage" alt="">
          </div>
        </template>
        </el-table-column>

        <el-table-column width="180px">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search" @click="search(scope.$index, scope.row)"
              placeholder="Type to search"></el-input>
          </template>
          <template slot-scope="scope">
          <el-button type="primary" style="width:75px;display:inline" @click="handleEdit(scope.$index, tableData)">Edit</el-button>
          <el-button type="danger" style="margin-left:5px;width:75px" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>

    <el-pagination
      background 
      style="float:center" 
      layout="prev, pager, next"
      :data="tableData"
      :total="100" page-size="5">
    </el-pagination>

      <!-- dialog -->
      <el-dialog :visible.sync="dialogVisible" :center="true">
          <el-form :model="rulesForm" :inline="true" style="text-align:center">
            <el-form-item label="First Name">
              <el-input v-model="rulesForm.firstname" placeholder=""></el-input>
            </el-form-item><br>
             <el-form-item label="Last Name">
              <el-input v-model="rulesForm.lastname" placeholder=""></el-input>
            </el-form-item><br>
             <el-form-item label="City">
              <el-input v-model="rulesForm.city" style="margin-left:9.5%" placeholder=""></el-input>
            </el-form-item><br>
             <el-form-item label="Phone_no">
              <el-input v-model="rulesForm.phone_no" placeholder=""></el-input>
            </el-form-item><br>
             <el-form-item label="Email">
              <el-input v-model="rulesForm.email" style="margin-left:6%" placeholder=""></el-input>
            </el-form-item><br>
             <el-form-item label="Companyame" style="margin-right:3.5%">
              <el-input v-model="rulesForm.companyName"  placeholder=""></el-input>
            </el-form-item><br>
            <el-form-item style="margin-left:6%">
              <el-button type="primary" style="width:85px;margin-right:25px">Save</el-button>
              <el-button type="primary" style="width:85px" @click="clear()">Clear</el-button>
            </el-form-item>
          </el-form>
      </el-dialog>

      

  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
const baseUrl ="http://localhost:3000/fakeapi"
export default {
  name: 'Home',
  data(){
    return{
      dialogVisible:false,
      tableData:[],
      editItem:[],
      search:'',
      firstname:'',
      lastname:'',
      city:'',
      phone_no:'',
      email:'',
      companyName:'',
      userImage:'',
      url:[],

      rulesForm:{
        firstname:'',
        lastname:'',
        city:'',
        phone_no:'',
        email:'',
        companyName:'',
      }
    }
  },
  methods:{
    getData(){
      axios.get(baseUrl).then(res =>{
        for(var i=0; i< res.data.length; i++){
          this.tableData.push({
            firstname: res.data[i].FirstName,
            lastname :res.data[i].LastName,
            city :res.data[i].City,
            phone_no:res.data[i].Phone_no,
            email:res.data[i].Email,
            companyName:res.data[i].CompanyName,
            userImage: res.data[i].UserImage
          })
          console.log(res.data);
        }
      })
      
    },
    handleEdit(index,row) {
      this.dialogVisible =true;
      this.editItem =row[index];
      this.rulesForm.firstname = this.editItem.firstname;
      this.rulesForm.lastname = this.editItem.lastname;
      this.rulesForm.city = this.editItem.city;
      this.rulesForm.phone_no = this.editItem.phone_no;
      this.rulesForm.email = this.editItem.email;
      this.rulesForm.companyName = this.editItem.companyName;
    },
    handleDelete(index,row){
      this.$confirm("Are you sure to delete this item?", "Warning",{
        confirmButtonText : "OK",
        cancelButtonText : "Cancel",
        type:"warning"
      }).then(res =>{
        axios.post(baseUrl,{
          firstname:row.FirstName
        }).then(res =>{
            this.tableData.splice(index,1);
            this.$message({
              type:'success',
              message:'Delete Successful'
            })
            console.log(res.data);
        }).catch((e)=>{
          this.$message({
              type:'error',
              message:e.message
            })
        })
        console.log(res.data);
        console.log(row);
        
      })
    },
    save(){
      
    },
    clear(){
      this.rulesForm.firstname=''
      this.rulesForm.lastname=''
      this.rulesForm.city=''
      this.rulesForm.phone_no=''
      this.rulesForm.email=''
      this.rulesForm.companyName=''
    }
  },
  created(){
    this.getData();
  }
}
</script>

<style scoped>
  #imageShow{
    width: 60%;
    height: 50%;
    position: relative;
    margin:2% 18%;
    background-repeat: repeat-x ;
  }
</style>
