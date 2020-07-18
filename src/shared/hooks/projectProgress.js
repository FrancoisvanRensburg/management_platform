import moment from 'moment';

export const progress = (tasks) => {
  let projectProgress = 0;

  if (tasks.length > 0) {
    let currentProjectVal = 0;
    let futureProjectVal = 0;

    for (let t in tasks) {
      const task = tasks[t];
      const {
        progress,
        effort,
        priority,
        actualstartdate,
        actualenddate,
      } = task;

      let currentTaskVal = 0;
      let futureTaskVal = 0;

      if (effort) {
        currentTaskVal = progress * effort;
        futureTaskVal = 100 * effort;
      } else {
        const endDate = moment(actualenddate);
        const startDate = moment(actualstartdate);
        const defaultEffort =
          (endDate.diff(startDate) / (3600 * 1000)) * (8 / 24) + 8;

        currentTaskVal = progress * defaultEffort;
        futureTaskVal = 100 * defaultEffort;
      }

      currentProjectVal = currentProjectVal + currentTaskVal;
      futureProjectVal = futureProjectVal + futureTaskVal;
    }

    projectProgress = (currentProjectVal / futureProjectVal) * 100;
  }

  return projectProgress;
};
