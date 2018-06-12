package com.progressiveCareUnit.services;

import com.progressiveCareUnit.models.Feedback;
import com.progressiveCareUnit.repositories.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.List;

@Service
public class FeedbackServiceImpl implements FeedbackService {

    @Autowired
    private FeedbackRepository commentRepository;

    @Override
    public List<Feedback> searchAllFeedbacks() {
        return commentRepository.findAll();
    }

    @Override
    public void insertFeedbacks(Feedback feedback) {
        String currentDate = String.valueOf(java.time.LocalDateTime.now());
        feedback.setDate(currentDate);
        commentRepository.insert(feedback);
    }
}
