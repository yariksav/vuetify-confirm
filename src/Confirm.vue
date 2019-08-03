<template>
  <v-dialog eager @input="change" value="true" :max-width="width" :persistent="persistent" @keydown.esc="choose(false)">
    <v-toolbar v-if="Boolean(title)" dark :color="color" dense>
      <v-icon v-if="Boolean(icon)">{{ icon }}</v-icon>
      <v-toolbar-title class="white--text" v-text="title"/>
    </v-toolbar>
    <v-card tile>
      <v-card-text v-html="message"/>
      <v-card-actions>
        <v-spacer/>
        <v-btn v-if="Boolean(buttonFalseText)" :color="buttonFalseColor" text @click="choose(false)">{{ buttonFalseText }}</v-btn>
        <v-btn v-if="Boolean(buttonTrueText)" :color="buttonTrueColor" text @click="choose(true)">{{ buttonTrueText }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { VCard, VCardActions, VCardText, VDialog, VIcon, VToolbar, VToolbarTitle, VSpacer, VBtn } from 'vuetify/lib'

export default {
  components: {
    VCard,
    VCardActions,
    VCardText,
    VDialog,
    VIcon,
    VToolbar,
    VToolbarTitle,
    VSpacer,
    VBtn
  },
  props: {
    buttonTrueText: {
      type: String,
      default: 'Yes'
    },
    buttonFalseText: {
      type: String,
      default: 'No'
    },
    buttonTrueColor: {
      type: String,
      default: 'primary'
    },
    buttonFalseColor: {
      type: String,
      default: 'grey'
    },
    color: {
      type: String,
      default: 'warning'
    },
    icon: {
      type: String,
      default () {
        return this.$vuetify.icons.values.warning
      }
    },
    message: {
      type: String,
      required: true
    },
    persistent: Boolean,
    title: {
      type: String
    },
    width: {
      type: Number,
      default: 400
    }
  },
  data () {
    return {
      value: false
    }
  },
  methods: {
    choose (value) {
      this.$emit('result', value)
      this.value = value
      this.$destroy()
    },
    change (res) {
      this.$destroy()
    }
  }
}
</script>
