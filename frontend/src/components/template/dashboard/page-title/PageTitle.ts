import { Options, Vue } from "vue-class-component";

@Options({
    name: "PageTitle",
    props: ['title']
})
export default class PageTitle extends Vue {}