import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $confirm (message: string, options?: object): Promise<any>
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    $confirm (message: string, options?: object): Promise<any>
  }
}
