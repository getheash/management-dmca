import Head from "next/head";
import styles from "../styles/pages.module.css";
import { Form, Col, Button } from "react-bootstrap";

function Subscription() {
  return (
    <div>
      <Head>
        <title>Geth Management - Subscription</title>
      </Head>
      <div>
        <section className={styles.subscription}>
          <p>If you are a new subscriber, please fill the required details:</p>
          <Form className={styles.subscriptionForm}>
            <Form.Row>
              <Col md="6" className={styles.formMargin}>
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  placeholder="Enter your first and last name"
                  required
                />
              </Col>
              <Col md="6" className={styles.formMargin}>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="Enter your email id"
                  required
                />
              </Col>
            </Form.Row>

            <Form.Row>
              <Col md="6" className={styles.formMargin}>
                <Form.Label htmlFor="url">Copyright Website</Form.Label>
                <Form.Control
                  type="url"
                  id="url"
                  placeholder="Enter your website url"
                  required
                />
                <Form.Text id="urlHelp">
                  please check if your URL has 'https://' at the beginning for
                  valid entry
                </Form.Text>
              </Col>

              <Col md="6" className={styles.formMargin}>
                <Form.Label htmlFor="urlOptional">
                  <i>Optional</i>
                </Form.Label>
                <Form.Control
                  type="url"
                  id="urlOptional"
                  placeholder="Enter your 2nd website url"
                />
              </Col>
            </Form.Row>

            <Form.Group>
              <Form.Label htmlFor="subscriptionPlan">
                Subscription Plan
              </Form.Label>
              <Form.Check
                type="radio"
                label="1-month - $350"
                name="subscriptionPlans"
                id="subscriptionPlan1"
                checked
              ></Form.Check>
              <Form.Check
                type="radio"
                label="3-months - $900"
                name="subscriptionPlans"
                id="subscriptionPlan2"
              ></Form.Check>
              <Form.Check
                type="radio"
                label="6-months - $1650"
                name="subscriptionPlans"
                id="subscriptionPlan3"
              ></Form.Check>
              <Form.Check
                type="radio"
                label="12-months - $3100"
                name="subscriptionPlans"
                id="subscriptionPlan4"
              ></Form.Check>
              <Form.Text id="planHelp">
                Every plan includes unlimited takedowns
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="referralCode">
                Referral Code (optional)
              </Form.Label>
              <Form.Control
                type="text"
                id="referralCode"
                placeholder="Enter referral code"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Form.Text id="submitBtnHelp">
              Upon successful submission, please look out for an email with
              payment info from us.
            </Form.Text>
          </Form>
        </section>
      </div>
    </div>
  );
}

export default Subscription;
