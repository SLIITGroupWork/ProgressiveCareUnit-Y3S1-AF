package com.progressiveCareUnit.services;

import com.progressiveCareUnit.models.Feedback;
import java.util.List;

public interface FeedbackService {
    List<Feedback> searchAllFeedbacks();
    void insertFeedbacks(Feedback comments);
}
