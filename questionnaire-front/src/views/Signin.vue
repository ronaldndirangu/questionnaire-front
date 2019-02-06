<template>
  <div class="container">
    <div class="auth">
      <h1>Questionnaire</h1>
      <form>
        <input type="text" v-model="email" name="email" class="signin-input" placeholder="Email">
        <input type="password" v-model="password" name="password" class="signin-input" placeholder="Password">
        <button type="submit" @click="signIn" class="signin-btn">Sign In</button>
        <div class="divider">
          <div class="separator"></div> 
            <span>OR</span>
          <div class="separator"></div>
        </div>
        <button type="submit" class="create-account-btn">Create Account</button>
      </form>
    </div>
    <div class="photo">
      <img src="../assets/quest.jpg">
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Signin",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn(e) {
      e.preventDefault();
      axios.post('http://localhost:5000/api/v1/auth/signin', {
        email: this.email,
        password: this.password
      })
        .then(res => {
          const { token, user } = res.data.data[0];
          localStorage.setItem('token', token);
          this.$router.push('/meetups')
        })
        .catch(err => console.log(err));
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    height: 100vh;
    width: 100vw;
  }
  h1 {
    font-size: 3em;
    color: #004cc7;
  }
  .auth {
    display: flex;
    flex-basis: 40%;
    flex-direction: column;
    text-align: center;
    margin: auto;
  }
  .signin-input {
    margin: 2%;
    width: 60%;
    height: 50px;
    border-radius: 50px;
    border: solid 1px #ccc;
    padding: 0 20px;
    font-size: 0.8em;
  }
  .signin-btn {
    margin: 1%;
    width: 65%;
    padding: 15px;
    font-size: 0.9em;
    font-weight: 700;
    border-radius: 50px;
    color: #fff;
    background: #004cc7;
  }
  .divider {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    width: 60%;
  }
  .create-account-btn {
    background: none;
    padding: 15px 70px;
    font-size: 0.8em;
    border: solid 1px #ccc;
    border-radius: 50px;
  }
  .create-account-btn:hover {
    border: solid 1px #004cc7;
  }
  .signin-input:focus {
    outline: none;
    border: solid 1px #004cc7;
  }
  .signin-btn:hover {
    outline: none;
    background: #71a5f8;
  }
  .signin-btn:focus, .create-account-btn:focus {
     outline: none;
  }
  span {
    padding: 5px;
    color: #004cc7
  }
  .separator {
    border-bottom: solid 2px #004cc7;
    width: 28%;
  }
  .photo {
    flex-basis: 60%;
  }
  img {
    height: 100%;
    width: 100%;
    -webkit-filter: blur(1.5px); /* Safari 6.0 - 9.0 */
    filter: blur(1.5px);
  }
</style>


