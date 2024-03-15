import axiosInstance from './axiosInstance';
import {saveHealthSurveyUrl} from './Urls';

export const saveHealthSurvey = async (surveyOption:object) => {
    try {
        const response = await axiosInstance.post(saveHealthSurveyUrl, surveyOption);
        return { success: true, data: response.data };
    } catch (error) {
        alert("설문조사 저장 중 에러가 발생했습니다. 다시 진행 해주세요.")
        return { success: false, message: '설문조사 저장 중 에러가 발생했습니다'};
    }
};

