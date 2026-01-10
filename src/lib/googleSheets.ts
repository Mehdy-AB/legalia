export interface SubmissionData {
    type: 'contact' | 'newsletter';
    [key: string]: string;
}

export const submitToGoogleSheet = async (data: SubmissionData) => {
    // This URL will need to be replaced with the user's deployed Web App URL
    const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || '';

    if (!GOOGLE_SCRIPT_URL) {
        throw new Error('Google Sheet URL is not configured');
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // IMPORTANT: This bypasses CORS but makes the response opaque
        headers: {
            'Content-Type': 'text/plain',
        },
        body: JSON.stringify(data),
    });

    // In no-cors mode, response.ok is always false and response.status is 0.
    // We cannot read the body or check status, so we assume success if fetch didn't throw.
    return { result: 'success' };
};
