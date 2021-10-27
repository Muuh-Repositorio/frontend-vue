import { Options, Vue } from "vue-class-component";

@Options({
    name: "Button",
    props: ['value']
})
export default class Button extends Vue {}