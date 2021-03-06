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
          {/*add attributes name, method, data-netlify to Form so that Netlify would recognize the form */}
          <Form
            name="subscription v3"
            method="POST"
            data-netlify="true"
            onSubmit="submit"
            className={styles.subscriptionForm}
          >
            {/*add input tag with hidden type and value matching with name attribute in Form tag */}
            <input type="hidden" name="form-name" value="subscription v3" />
            <Form.Row>
              {/*wrap Col within Form.Group using 'as' attribute so that it adds margin-bottom automatically */}
              <Form.Group as={Col} md="6">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your first and last name"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email id"
                  required
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label htmlFor="url">Copyright Website</Form.Label>
                <Form.Control
                  type="url"
                  id="url"
                  name="url"
                  placeholder="Enter your website url"
                  required
                />
                <Form.Text id="urlHelp">
                  please check if your URL has 'https://' at the beginning for
                  valid entry
                </Form.Text>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label htmlFor="urlOptional">
                  <i>Optional</i>
                </Form.Label>
                <Form.Control
                  type="url"
                  id="urlOptional"
                  name="urlOptional"
                  placeholder="Enter your 2nd website url"
                />
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Label htmlFor="subscriptionPlan">
                Subscription Plan
              </Form.Label>
              <Form.Control
                as="select"
                id="subscriptionPlan"
                name="subscriptionPlan"
                required
                custom
              >
                <option value="0">3-month - $1000</option>
                <option value="1">6-month - $1700 (15% off)</option>
                <option value="2">12-month - $3000 (25% 0ff)</option>
              </Form.Control>
              <Form.Text id="planHelp">
                Choose a subscription plan. Every plan includes unlimited
                takedowns.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="referralCode">
                Referral Code (optional)
              </Form.Label>
              <Form.Control
                type="text"
                id="referralCode"
                name="referralCode"
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
