<template>
 <div class="stars font">
    <div class="twinkling">
      <h1 class="header">Prescriptive Analytics</h1>
      <hr class="hr pres-analytics__hr">
      <div class="pres-analytics__header-2">
        Given what's happened / what we think will happen,<br>
         what is the best action to take?
      </div>
      <img alt="schema_1" class="pres-analytics__schema-1" src="../img/pres_analytics/prescriptive_modeling_1.png" v-viewer/>
      <div class="pres-analytics__header-2">
        Optimization Mathematical Modeling<br>
        solves complex problems the human mind cannot
      </div>
      <img alt="schema_2" class="pres-analytics__schema-2" src="../img/pres_analytics/or_1.png" v-viewer/>
      <div class="pres-analytics__text">
        A&nbsp;custom mathematical algorithm is&nbsp;built to&nbsp;represent the problem at&nbsp;hand, 
        considering all unique requirements and objectives. The algorithm generates millions of&nbsp;all 
        possible solutions, narrowing down the possibilities that satisfy constraints, ultimately 
        identifying the optimal solution.
      </div>
    </div>
 </div>
</template>

<script>

export default {
  name: 'PresAnalytics',
  data() {
    return {

    }
  }
}
</script>
