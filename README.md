# IELTS Speaking Master

A React-based application designed to help users practice and improve their IELTS Speaking test skills. This app simulates the three parts of the IELTS Speaking test, records audio responses, and provides AI-powered feedback using Google's Gemini AI.

## Features

-   **Full Test Simulation**: Practice all three parts of the IELTS Speaking test.
-   **Individual Part Practice**: Focus on Part 1, Part 2, or Part 3 separately.
-   **Audio Recording**: Record your spoken responses directly in the app.
-   **AI Evaluation**: Receive detailed feedback and scores powered by Google Gemini AI.
-   **Timers**: Built-in preparation and speaking time limits to mimic real test conditions.
-   **Results Dashboard**: View your performance with charts and detailed analysis.

## Technologies Used

-   **React 19**: For building the user interface.
-   **Vite**: Fast build tool and development server.
-   **TypeScript**: For type-safe JavaScript development.
-   **Google Generative AI (@google/genai)**: For AI-powered evaluation of responses.
-   **Recharts**: For data visualization in results.
-   **Heroicons**: For icons and UI elements.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/SazidulAlam47/ielts-speaking-master
    cd ielts-speaking-master
    ```

2. **Install dependencies**:

    ```bash
    pnpm install
    ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your Google Gemini API key:

    ```
    VITE_GEMINI_API_KEY=your_api_key_here
    ```

    You can obtain an API key from the [Google AI Studio](https://makersuite.google.com/app/apikey).

4. **Run the development server**:
    ```bash
    pnpm dev
    ```
    Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Usage

1. **Start the App**: Launch the development server as described above.
2. **Select Test Mode**: Choose from Full Test, Part 1 (Introduction), Part 2 (Individual Long Turn), or Part 3 (Two-way Discussion).
3. **Follow Instructions**: The app will guide you through each part with prompts and timers.
4. **Record Responses**: Use the audio recorder to capture your spoken answers.
5. **Receive Feedback**: After completing the test, view AI-generated evaluation and scores.

## Build for Production

To build the app for production:

```bash
pnpm build
```

To preview the production build locally:

```bash
pnpm preview
```

## Project Structure

-   `src/App.tsx`: Main application component.
-   `src/components/`: Reusable UI components (AudioRecorder, TestResult).
-   `src/services/`: API services (geminiService for AI evaluation).
-   `src/constants.ts`: Test content and constants.
-   `src/types.ts`: TypeScript type definitions.

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

Please ensure your code follows the existing style and includes tests if applicable.

## Disclaimer

This app is for educational purposes only and is not affiliated with the official IELTS test. AI evaluations are approximations and should not be considered official scores.
