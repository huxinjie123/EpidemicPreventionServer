<template>
  <div>
    <script :id="id" type="text/plain">
  {{ defaultMsg }}
    </script>
  </div>
</template>
<script>
export default {
  name: "UE",
  data() {
    return {
      editor: null
    };
  },
  props: {
    defaultMsg: {
      type: String,
      default: ""
    },
    config: {
      type: Object,
      default: {}
    },
    id: {
      type: String,
      default: ""
    }
    /**
     * 在需要引入的组件中使用ue组件
     *  <UE :defaultMsg="defaultMsg" :config="config" ref="ue"></UE>
     *  defaultMsg:"内容"
     *  config:{
     *    initialFrameWidth:1200
     *  }
     *
     */
  },
  methods: {
    // 获取内容方法
    getUEContent() {
      let content = this.editor.getContent();
      if (content != null) {
        content = content.replace(
          /\s*on[a-z]+\s*=\s*("[^"]+"|'[^']+'|[^\s]+)\s*/gi,
          ""
        );
        return this.editor.getContent();
      } else {
        return this.editor.getContent();
      }
    },
    // 获取纯文本内容方法
    getUEContentTxt() {
      return this.editor.getContentTxt();
    },
    // 设置编辑器内容
    setUEcontent(content) {
      this.editor.ready(() => {
        this.editor.setContent(content);
      });
    },
    // 编辑器获得焦点
    focus() {
      this.editor.focus();
    },
    // 编辑器是否为焦点状态
    isFocus() {
      return this.editor.isFocus();
    },
    // 检查编辑器内是否有内容
    hasContents() {
      return this.editor.hasContents();
    },
    //  插入html代码
    execCommand(content) {
      this.editor.execCommand("inserthtml", content);
    },
    initEditor() {
      let id = this.id;
      let config = Object.assign({}, this.config, {
        userId: this.$store.getters.userId,
        initialContent: " "
      });
      this.editor = UE.getEditor(id, config); // 初始化UE
      this.$el.addEventListener(
        "onclick",
        () => {
          console.log(arguments);
        },
        true
      );
      this.editor.ready(() => {
        this.editor.setContent(this.defaultMsg);
      });
      let that = this;
      this.editor.addListener("contentChange", () => {
        that.$emit("onContentChange", that.getUEContent());
      });
    },
    // 禁用
    setUEDisabled() {
      return this.editor.setDisabled();
    }
  },
  watch: {
    defaultMsg(val) {
      this.$nextTick(() => {
        this.editor.setContent(val);
      });
    }
  },
  mounted() {
    this.initEditor();

    /**
     *上传图片内容至服务器
     * /
  /*  function initClient() {
      if (!window.uploadimage_client) {
        api.getsts().then(res => {
          if (res.data && res.data.token) {
            window.uploadimage_client = new OSS.Wrapper({
              region: "oss-cn-qingdao",
              accessKeyId: res.data.token.accessKeyId,
              accessKeySecret: res.data.token.accessKeySecret,
              stsToken: res.data.token.securityToken,
              bucket: "chironueimage" //开发环境
            });
          }
        });
      }
    }
    initClient();*/
  },
  destroyed() {
    if (!this.editor) return;
    this.editor.destroy();
  }
};
</script>
<style lang="scss">
</style>
