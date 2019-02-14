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
    padding: 2.2% 3.8%;
    margin: 2px 10px;
    background: none;
    border: solid 1px #ccc;
    color:  #000;
    border-radius: 5px;
    font-size: 0.8em;
  }
  .save:hover, .cancel:hover  {
    border: solid 1px #004cc7;
    color: #004cc7;
  }
  .save:focus {
    outline: none;
  }
  .cancel {
    padding: 2.1% 3.6%;
    margin: 2px 5px;
    background: none;
    border: solid 1px #ccc;
    color:  #000;
    border-radius: 5px;
    font-size: 0.8em;
  }

  .cancel:focus {
    outline: none;
  }
</style>

