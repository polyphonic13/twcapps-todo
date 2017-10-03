import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import { Component, Prop } from "vue-typed";

import * as types from "../../store/types";
import * as filterTypes from "../../store/modules/label-filters";

import * as Logger from "js-logger";

import Label from "../../models/label";

import "./label-list.scss";

const template = require("./label-list.vue");

const filters = {
  [filterTypes.ALL]: () => true,
  [filterTypes.ACTIVE]: (label: Label) => !label.isActive,
  [filterTypes.COMPLETE]: (label: Label) => label.isActive
};

@Component({
  filters: filters,
  mixins: [template],
  computed: mapGetters({
    labels: types.GET_LABELS
  }),
  methods: {
    ...mapActions({
      fetchLabels: types.FETCH_LABELS
    })
  },
  components: {
  },
  mounted: () => {
    // Logger.info("LabelList component / mounted, this.fetchLabels = ", this.fetchLabels);
  },
})
export default class LabelList extends Vue {
  created() {
    Logger.info("LabelList/created, this = ", this.$store);
    this.$store.dispatch(types.FETCH_LABELS).then(() => {
      Logger.info("fetched labels");
    });
  }

  get allLabels(): Label[] {
    return this.$store.getters[types.GET_LABELS];
  }
}
