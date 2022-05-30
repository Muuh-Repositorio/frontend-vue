import { Options, Vue } from "vue-class-component";

@Options({
    name: "Card",
    props: ['title', 'value', 'width']
})
export default class Card extends Vue {}