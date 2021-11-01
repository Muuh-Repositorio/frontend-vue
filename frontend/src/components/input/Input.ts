import { Options, Vue } from "vue-class-component";
import { maska } from 'maska'

export function removeMask(value_: any): string {
    const regex = new RegExp("\\d+", 'g')
    value_ = value_.match(regex)

    let value = '';
    for (const v of value_) {
        value += v
    }
    return value
}

@Options({
    name: "Input",
    props: ['type', 'label', 'modelValue', 'mask'],
    directives: { maska }
}) 
export default class Input extends Vue {
    onInput(event: any) {
        this.$emit('update:modelValue', event.target.value)
    }
}