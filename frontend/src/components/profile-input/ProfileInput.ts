import { Options, Vue } from "vue-class-component";

@Options({
    name: "ProfileInput",
    props: [ 'label', 'disabled' ]
})
export default class ProfileInput extends Vue {}