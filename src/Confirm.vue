<template>
  <v-dialog eager @input="change" value="true" :max-width="width" :persistent="persistent" @keydown.esc="choose(false)">
    <v-card tile>
      <v-toolbar v-if="Boolean(title)" dark :color="color" dense flat>
        <v-icon v-if="Boolean(icon)" left>{{ icon }}</v-icon>
        <v-toolbar-title class="white--text" v-text="title"/>
      </v-toolbar>
      <v-card-text class="body-1 text-body-1 py-3" v-html="message"/>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          v-if="Boolean(buttonFalseText)"
          :color="buttonFalseColor"
          :text="buttonFalseFlat"
          @click="choose(false)"
        >
          {{ buttonFalseText }}
        </v-btn>
        <v-btn
          v-if="Boolean(buttonTrueText)"
          :color="buttonTrueColor"
          :text="buttonTrueFlat"
          @click="choose(true)"
        >
          {{ buttonTrueText }}
        </v-btn>
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
    buttonFalseFlat: {
      type: Boolean,
      default: true
    },
    buttonTrueFlat: {
      type: Boolean,
      default: true
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
      default: 450
    }
  },
  data () {
    return {
      value: false
    }
  },
  mounted () {
    document.addEventListener('keyup', this.onEnterPressed)
  },
  destroyed () {
    document.removeEventListener('keyup', this.onEnterPressed)
  },
  methods: {
    onEnterPressed (e) {
      if (e.keyCode === 13) {
        e.stopPropagation()
        this.choose(true)
      }
    },
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
