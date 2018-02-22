/*********************************************************************
* Created by tangyue on 2017/12/05                                   *
*********************************************************************/


<template>
    <div class="ls-messages_Wrapper" :style="formattedStyles">
        <!--<template v-for="message in messages">-->
            <MsgBasic v-for="message in messages"
                :aiya="message.aiya"
                :ddd="message.ddd"
                :type="message.type"
                :hasModal="message.hasModal"
                :modalOpt="message.modalOpt"
                :closable="message.closable"
                :closeIconOpt="message.closeIconOpt"
            ></MsgBasic>
        <!--</template>-->
    </div>
</template>

<script>
    import MsgBasic from './MsgBasic.vue';
    export default{
        components: { MsgBasic },
        props:{
            hasModal:{
                type: Boolean,
                default: false
            }
        },
        data() {
            /**
             * isShown:{Boolean} 整个alert组件是否显示，默认显示
             */
            return {
                isShown:true,
                messages:[],//所有的message，因为页面上允许有多个message
                formattedStyles:''
            }
        },

        watch:{
            messages(val){
                let me = this;
                console.log('909090');
                console.log(val);

                //当没有任何messager的时候，关闭最外层的
                if(val.length){
                    for(let i = 0; i < val.length; i++){
                        let oMsg = val[i];
                        if(oMsg.hasModal){
                            let bodyWidth = document.body.offsetWidth;
                            let bodyHeight = document.body.offsetHeight;
                            let modalBgColor = (oMsg.modalOpt && oMsg.modalOpt.bgColor)? oMsg.modalOpt.bgColor : '';

                            let result = `width:${bodyWidth}px;height:${bodyHeight}px;background-color:${modalBgColor}`;
                            me.formattedStyles = result;
                            console.log(result)
                            break
                        }
                    }
                }else{
                    me.formattedStyles = '';
                }


            }
        },
        computed:{
//            /* 根据用户传参，生成所有messagers的包裹元素的整体样式 TODO */
//            formattedStyles(){
//                let me = this;
//                let result = 'color:red;';
//
//
//                return result;
//            },
//            formattedAlertClass(){
//                return `${this.type}`;
//            },
        },
        methods: {
            /**
             * 增加并显示一个message
             */
            addFFF(opts){
                let me = this;

                //TODO 处理opts;
                //每个message属性配置
                let everySingleMessageProps = Object.assign({
                    aiya:'777',
                    dddd: '',
                    type: ''
                },opts);

                me.messages.push(everySingleMessageProps);
            }
        },
        created() {
            console.log('messager created');
        },
        mounted () {

        }
    }
</script>
