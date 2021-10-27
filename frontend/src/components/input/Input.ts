import { Options, Vue } from "vue-class-component";

@Options({
    name: "Input",
    props: ['type', 'label', 'modelValue']
}) 
export default class Input extends Vue {
    onInput(event: any) {
        this.$emit('update:modelValue', event.target.value)
    }
}