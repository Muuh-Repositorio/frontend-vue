import { Options, Vue } from "vue-class-component";

@Options({
    name: "Card",
    props: ['title', 'value']
})
export default class Card extends Vue {}