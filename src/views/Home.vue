<template>
  <div class="home">
      <!-- table -->
      <el-table height="750px" :data="tableData.filter(data => !search || data.firstname.toLowerCase().includes(search.toLowerCase()))" 
        border 
        style="width:80%;position:relative;left:10%;overflow:none">

        <el-table-column prop="firstname" sortable label="FirstName"></el-table-column>
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
      background @current-change="handleCurrentChange"
      :current-page="current_page"
      style="float:center" 
      layout="prev, pager, next"
      :data="tableData" :page-sizes="[1,2,3,4]"
      :total="tableData.length" page-size="1">
    </el-pagination>
      <!-- dialog -->
      <el-dialog :visible.sync="dialogVisible" :center="true">
          <el-form :model="rulesForm" :inline="true" style="text-align:center">
            <el-form-item label="First Name">
              <el-input v-model="rulesForm.firstname" style="margin-left:20px;width:210px" placeholder=""></el-input>
            </el-form-item><br>
             <el-form-item label="Last Name">
              <el-input v-model="rulesForm.lastname" style="margin-left:20px;width:210px" placeholder=""></el-input>
            </el-form-item><br>
             <el-form-item label="City">
              <el-input v-model="rulesForm.city" style="margin-left:60px;width:210px" placeholder=""></el-input>
            </el-form-item><br>
             <el-form-item label="Phone_no">
              <el-input v-model="rulesForm.phone_no" style="margin-left:20px;width:210px" placeholder=""></el-input>
            </el-form-item><br>
             <el-form-item label="Email">
              <el-input v-model="rulesForm.email" style="margin-left:50px;width:210px" placeholder=""></el-input>
            </el-form-item><br>
            <el-form-item label="Companyame" >
              <el-input v-model="rulesForm.companyName" style="margin-left:0px;width:210px" placeholder=""></el-input>
            </el-form-item><br>


            <el-form-item label="Image" >
              <div style="width:210px;height:180px;margin-left:42px;border:2px solid rgb(242, 242, 242);">
                <el-upload action="http://localhost:3000/fakeapi"
                v-model="rulesForm.userImage"
                :on-success="addimageSuccess"
                :show-file-list="false"
                >
                  <el-button  style="margin:0 auto;background-color:#67C23A;color:white" size="mini">Uploaditem</el-button>
                </el-upload>
                <div style="margin-left:35px;height:130px;width:140px;border:1px solid rgb(242, 242, 242)">
                  <img style="width:100%;height:100%" v-if="userImageUrl" :src="userImageUrl" alt="">
                  <img style="width:100%;height:100%" v-else :src="editImage"  alt="">
                </div>     
              </div>                  
            </el-form-item><br>
            <el-form-item style="margin-left:6%">
              <el-button type="primary" style="width:85px;margin-right:25px" @click="save()">Save</el-button>
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

      userImageUrl:'',
      editImage:'',

      current_page:1,

      rulesForm:{
        firstname:'',
        lastname:'',
        city:'',
        phone_no:'',
        email:'',
        companyName:'',
        userImage:''
      }
    }
  },
  methods:{
    handleCurrentChange(val){
      this.current_page =val;
      console.log(val);
    },
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
      this.editImage = this.editItem.userImage
    },
    addimageSuccess(res,file){
      this.userImageUrl = URL.createObjectURL(file.raw);
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
      this.dialogVisible =false;
      // this.tableData.push({
      //   firstname: this.rulesForm.firstname
      // })
      axios.post(baseUrl,{
        firstname:this.rulesForm.firstname,
        lastname:this.rulesForm.lastname,
        city: this.rulesForm.city,
        phone_no:this.rulesForm.phone_no,
        email:this.rulesForm.email,
        companyName:this.rulesForm.companyName
      }).then((res) => {
        console.log("hi=>>",res, this.rulesForm.firstname);
        
      })
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
    background-repeat: no-repeat ;
    border-radius: 50%;

  }
</style>
