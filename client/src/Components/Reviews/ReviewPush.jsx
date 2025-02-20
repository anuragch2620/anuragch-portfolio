import { useState } from "react";
import axios from "axios";

export default function ReviewPush() {
  const [review, setReview] = useState({ name: "", comment: "", rating: 5 });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        "http://localhost:5000/reviews",
        ...{
          ...review,
          rating: Number(review.rating),
        }
      );
      alert("✅ Review Submitted Successfully!");
      setReview({ name: "", comment: "", rating: 5 });
    } catch (error) {
      console.error("❌ Error submitting review:", error);
      alert("Failed to submit review!");
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h3>Add a Review</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={review.name}
          onChange={(e) => setReview({ ...review, name: e.target.value })}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <textarea
          placeholder="Your Review"
          value={review.comment}
          onChange={(e) => setReview({ ...review, comment: e.target.value })}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="number"
          min="1"
          max="5"
          value={review.rating}
          onChange={(e) => setReview({ ...review, rating: e.target.value })}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{ padding: "10px", width: "100%" }}
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
}
