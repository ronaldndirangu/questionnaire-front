<template>
  <div>
    <button type="submit" class="save" @click.prevent="$emit('createMeetup')">Save</button>
    <button type="submit" class="cancel">Cancel</button>
  </div>
</template>

<script>
export default {
  name: "SubmitArea",
}
</script>

<style scoped>
  .save {
    padding: 2% 6%;
    margin: 2px 10px;
    background: none;
    border: solid 1px rgb(99, 182, 92);
    color:  rgb(99, 182, 92);
    border-radius: 5px;
    font-size: 0.8em;
  }
  .save:hover {
    background: rgb(99, 182, 92);
    color: #fff;
  }
  .save:focus {
    outline: none;
  }
  .cancel {
    padding: 2% 5%;
    margin: 2px 5px;
    background: none;
    border: solid 1px rgb(218, 84, 75);
    color:  rgb(218, 84, 75);
    border-radius: 5px;
    font-size: 0.8em;
  }
  .cancel:hover {
    background: rgb(218, 84, 75);
    color: #fff;
  }
  .cancel:focus {
    outline: none;
  }
</style>

