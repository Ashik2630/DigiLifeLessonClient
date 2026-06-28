import React from 'react';
import ManageLessonPage from './ManageLessonsPage';
import { showLessons } from '@/lib/api/lessons';
import { getUserReports } from '@/lib/api/admin';

const ManageLesson = async () => {

  const lessonData = await showLessons(); 
  const userReports = await getUserReports();
  const userReportsCount = userReports?.data.length || 0;

  return <ManageLessonPage lessonData={lessonData} userReports={userReportsCount} />;
};

export default ManageLesson;