import Head from "next/head";
import styles from "../styles/pages.module.css";
import { Form, Button } from "react-bootstrap";

function SubmitLinks() {
  return (
    <div>
      <Head>
        <title>Geth Management - Submit Links</title>
      </Head>
      <div>
        <section className={styles.submitLinks}>
          <p>Please use the form to submit links that need to be taken down:</p>
          <Form
            name="submitLinks v1"
            method="POST"
            data-netlify="true"
            onSubmit="submit"
            className={styles.submitLinksForm}
          >
            {/*add input tag with hidden type and value matching with name attribute in Form tag */}
            <input type="hidden" name="form-name" value="submitLinks v1" />
            <Form.Group>
              <Form.Label htmlFor="identityCode">Identity Code</Form.Label>
              <Form.Control
                type="text"
                id="identityCode"
                name="code"
                placeholder="Enter your identity code"
                required
              />
              <Form.Text id="identityCodeHelp">
                Identity code can be found in Subscription Payment Confirmation
                email
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="copyrightTitle">Copyright Title</Form.Label>
              <Form.Control
                type="text"
                id="copyrightTitle"
                name="copyrightTitle"
                placeholder="Enter the title of your copyright content"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="links">Links to be taken down</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                id="links"
                name="links"
                placeholder="Enter the website links..."
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="comment">Comment (optional)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                id="comment"
                name="comment"
                placeholder="Enter your comments..."
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </section>
      </div>
    </div>
  );
}

export default SubmitLinks;
