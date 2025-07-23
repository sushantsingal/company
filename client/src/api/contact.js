export const submitContactFrom = async (formData) => {
    try{
        const res = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Something went wrong");

        return { success: true, message: data.message };
    } catch (error) {
        return { success: false, message: error.message };
    }
};