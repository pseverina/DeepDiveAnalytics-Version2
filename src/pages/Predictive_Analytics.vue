<template>
 <div class="stars font">
    <div class="twinkling">
      <h1 class="predAnalytics__header header">Predictive Analytics</h1>
      <hr class="hr predAnalytics__hr">
      <div class="predAnalytics__header-2"> 
        What is the difference between AI,
        Machine Learning, & Deep Learning ?
      </div>
      <img src='../img/pred_analytics/AI_subsets_black.png' class="predAnalytics__schema-1" v-viewer />
      <div class="predAnalytics__text"> Artificial Intelligence, Machine Learning,& Deep Learning are nested subsets <br>
          of each other, as deplicated in the diagram above.
      </div>
      <hr class="hr predAnalytics__hr-2">
      <img src='../img/pred_analytics/machine_learning_black.png' class="predAnalytics__schema-2" v-viewer />
      <div class="predAnalytics__header-2">
          Machine Learning is the most promising <br>
          tool in the AI category for businesses.
      </div>
    </div>
 </div>
</template>

<script>

export default {
  name: 'PredAnalytics',
  data() {
    return { }
  }
}
</script>
