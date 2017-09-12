<template>
  <div class="npc-gen">
    <div class="panel panel-primary">
      <div class="panel-heading"><span class="h3">Welcome to the 5th Edition Character Quick-Gen!</span></div>
      <div class="panel-body">
        <div class="panel-body">
          <form class="form-inline">
            <label>Choose a Background:</label>
            <!-- <select class="form-control" ng-options="background for background in ctrl.backgrounds" ng-model="ctrl.selectionBg"></select> -->
            <label>Choose a Race:</label>
            <!-- <select class="form-control" ng-options="race for race in ctrl.races" ng-model="ctrl.selectionRa"></select> -->
              <button class="btn btn-success" type="submit">Generate</button></form>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 pull-left">
          <div class="panel panel-primary">
            <div class="panel-heading"><label>Background</label></div>
            <div class="panel-body">
              <dl class="dl-horizontal">
                <dt>Upbringinging:</dt>
                <dd>ctrl.char.background</dd>
                <dt>Feature:</dt>
                <dd><button class="btn btn-xs btn-default" type="button" data-toggle="collapse" data-target="#bgFeatureText"><strong>ctrl.char.feature[0]</strong> - Click for Details</button>
                  <div class="collapse" id="bgFeatureText">char feature 1</div>
                </dd>
                <div ng-if="ctrl.background.extra">
                  <dt>ctrl.char.specialty[0]:</dt>
                  <dd>ctrl.char.specialty[1]</dd>
                </div>
                <dt>Personality Trait:</dt>
                <dd>ctrl.char.trait</dd>
                <dt>Ideal:</dt>
                <dd><strong>ctrl.char.ideal[0]	</strong>ctrl.char.ideal[1] <em>(ctrl.char.ideal[2])</em></dd>
                <dt>Bond:</dt>
                <dd>ctrl.char.bond</dd>
                <dt>Flaw:</dt>
                <dd>ctrl.char.flaw</dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12 pull-right">
          <div class="panel panel-primary">
            <div class="panel-heading"><label>Character</label></div>
            <div class="panel-body">
              <dl class="dl-horizontal">
                <dt>Name:</dt>
                <dd>ctrl.char.name</dd>
                <dt>Gender:</dt>
                <dd>ctrl.char.gender</dd>
                <dt>Race:</dt>
                <dd><button class="btn btn-xs btn-default btn btn-xs btn-default" type="button" data-toggle="collapse" data-target="#raFeatureText"><strong>ctrl.char.sub || ctrl.char.race</strong> - Click for Details</button>
                  <div class="collapse" id="raFeatureText">ctrl.char.radesc</div>
                </dd>
                <dt>Speed:</dt>
                <dd>ctrl.char.speed ft/round</dd>
                <dt>Age:</dt>
                <dd>ctrl.char.age years old (ctrl.char.ageMin / ctrl.char.ageMax)</dd>
                <dt>Ability Modifiers:</dt>
                <!-- <dd ng-repeat="(key, value) in ctrl.char.ability">key: +value</dd> -->
                <dt>Racial Traits:</dt>
                <!-- <dd ng-repeat="(key, value) in ctrl.char.racials track by $index"><button class="btn btn-xs btn-default" type="button" data-toggle="collapse" data-target="#raRacialText{{$index}}"><strong>{{key}}</strong> - Click for Details</button>
                  <div class="collapse" id="raRacialText{{$index}}">{{value}}</div>
                </dd> -->
              </dl>
            </div>
          </div>
          <div class="panel panel-primary">
            <div class="panel-heading"><label>Profiencies</label></div>
            <div class="panel-body">
              <dl class="dl-horizontal">
                <dt>Skills:</dt>
                <!-- <dd ng-repeat="skill in ctrl.char.skills track by $index">{{skill}}</dd> -->
                <dt>Tools:</dt>
                <!-- <dd ng-hide="ctrl.char.tools[0]">none</dd>
                <dd ng-show="ctrl.char.tools[0]" ng-repeat="tool in ctrl.char.tools track by $index">{{tool}}</dd> -->
              </dl>
            </div>
          </div>
          <div class="panel panel-primary">
            <div class="panel-heading"><label>Other</label></div>
            <div class="panel-body">
              <dl class="dl-horizontal">
                <dt>Extra Languages:</dt>
                <!-- <dd ng-repeat="language in ctrl.char.languages track by $index">{{language}}</dd> -->
                <dt>Equipment:</dt>
                <!-- <dd ng-repeat="item in ctrl.char.equipment track by $index">{{item}}</dd> -->
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'npc-gen',
    data() {
      return {
      }
    }
  }

</script>


<style scoped>

</style>