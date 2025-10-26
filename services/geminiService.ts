
import { GoogleGenAI } from "@google/genai";
import { Student } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("Gemini API key not found. AI features will be disabled. Please set the API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });


export const generateStudentReport = async (student: Student): Promise<string> => {
    if (!API_KEY) {
        return Promise.resolve("AI functionality is disabled. API key is missing.");
    }

    const model = 'gemini-2.5-flash';
    
    const prompt = `
        You are an experienced educator creating a personalized progress report summary for a student.
        Based on the following data, write a constructive, encouraging, and insightful summary of about 150 words.
        Highlight strengths, identify areas for improvement, and suggest actionable steps for the student and parents.

        Student Data:
        - Name: ${student.name}
        - Class: ${student.class}
        - Overall Attendance: ${student.attendance}%
        - Grades:
            - Math: ${student.grades.Math || 'N/A'}%
            - Science: ${student.grades.Science || 'N/A'}%
            - English: ${student.grades.English || 'N/A'}%
            - History: ${student.grades.History || 'N/A'}%

        Structure the report with these sections:
        1.  **Academic Performance:** Briefly summarize their performance in key subjects.
        2.  **Attendance & Engagement:** Comment on their attendance record.
        3.  **Strengths:** Point out their strongest areas.
        4.  **Areas for Improvement:** Gently mention subjects or areas needing more focus.
        5.  **Recommendations:** Provide 2-3 specific suggestions for improvement.

        Maintain a positive and supportive tone. Format the output as clean markdown.
    `;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("Error generating student report:", error);
        return "An error occurred while generating the AI report. Please try again later.";
    }
};
