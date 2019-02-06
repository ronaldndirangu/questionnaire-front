<template>
  <div>
    <editor-menu-bar :editor="editor">
        <div slot-scope="{ commands, isActive }">
          <button :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
            Bold
          </button>
          <button :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click="commands.heading({ level: 2 })">
            H2
          </button>
        </div>
      </editor-menu-bar>
      <editor-content :editor="editor" />
  </div>
</template>

<script>
// Import the editor
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'

export default {
  components: {
    EditorContent,
    EditorMenuBar
  },
  data() {
    return {
      editor: null,
    }
  },
  mounted() {
    this.editor = new Editor({
      content: '<p>This is just a boring paragraph</p>',
    })
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>