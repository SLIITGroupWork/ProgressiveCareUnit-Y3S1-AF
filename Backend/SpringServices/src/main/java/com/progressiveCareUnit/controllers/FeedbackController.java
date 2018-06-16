package com.progressiveCareUnit.controllers;

import com.progressiveCareUnit.models.Feedback;
import com.progressiveCareUnit.services.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("api/feedbacks")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    @RequestMapping(method = RequestMethod.POST)
    public void createFeedbacks(@RequestBody Feedback feedback) {
        feedbackService.insertFeedbacks(feedback);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Feedback> getAllFeedbacks() {
        return feedbackService.searchAllFeedbacks();
    }
}
