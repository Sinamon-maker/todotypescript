import React, { useEffect, useState } from 'react';

import { useParams, useNavigate, useLoaderData } from 'react-router-dom';

import { UserContext } from '../../Context/UserContext';

import { ContentOfTasks } from '../../Components/ContentOfTasks/contentOfTasks';

import { Task } from '../../globalTypes';

type QuizParams = {
	userId: string;
};

const TasksPage = () => {
	return <ContentOfTasks />;
};

export default TasksPage;
